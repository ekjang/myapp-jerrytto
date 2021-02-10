package my.app.jerrytto.statistics.service

import my.app.jerrytto.api.model.LottoRound
import my.app.jerrytto.api.service.LotteryApiService
import my.app.jerrytto.common.service.ConvertService

import my.app.jerrytto.statistics.model.WinningCountByNum
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

/**
 * Created by ekjan.
 *   Date : 2021-01-29 오전 9:53
 */
@Service
class StatisticsServiceImpl implements StatisticsService {

    @Autowired
    LotteryApiService lotteryApiService

    @Autowired
    ConvertService convertService


    List<LottoRound> allWinningInfo //모든 회차의 당첨 정보
    WinningCountByNum totalWinningCountByNum //1등번호+보너스번호의 번호별 당첨 횟수
    WinningCountByNum winningCountByNum //1등번호의 번호별 당첨 횟수
    WinningCountByNum bonusCountByNum //보너스번호의 번호별 당첨 횟수
    int[] totalCount
    int[] winningCount
    int[] bonusCount

    @Override
    def getSummary() {
        if(allWinningInfo == null || allWinningInfo.size() == 0) {
            initWinningInfo()
            getWinningCountByNumbers(2)
            getWinningCountByNumbers(3)
        }
        return [
                "allInfo" : allWinningInfo,
                "lastRoundNo" : allWinningInfo.size(),
                "totalWinningCountByNum" : totalWinningCountByNum,
                "winningCountByNum" : winningCountByNum,
                "bonusCountByNum" : bonusCountByNum
        ]
    }

    @Override
    def initWinningInfo() {
        int roundNo = 0
        allWinningInfo = new ArrayList<LottoRound>()
        totalCount = new int[45]
        winningCount = new int[45]
        bonusCount = new int[45]

        def start = System.currentTimeMillis()
        while(1) {
            roundNo++
            LottoRound item = lotteryApiService.getLottoNumByRound(2, roundNo)

            if(item.returnValue.equalsIgnoreCase("fail")) {
                break
            } else {
                winningCount[item.firstNum - 1]++
                winningCount[item.secondNum - 1]++
                winningCount[item.thirdNum - 1]++
                winningCount[item.fourthNum - 1]++
                winningCount[item.fifthNum - 1]++
                winningCount[item.sixthNum - 1]++
                bonusCount[item.bonusNum - 1]++

                totalCount[item.firstNum - 1]++
                totalCount[item.secondNum - 1]++
                totalCount[item.thirdNum - 1]++
                totalCount[item.fourthNum - 1]++
                totalCount[item.fifthNum - 1]++
                totalCount[item.sixthNum - 1]++
                totalCount[item.bonusNum - 1]++

                allWinningInfo.add(item)
            }
        }
        def end = System.currentTimeMillis()
        println "roundNo:" + allWinningInfo.size() + ", loading time: " + (end-start)/1000

        return allWinningInfo
    }

    @Override
    def addAllWinningInfo() {
        //insert winning info
    }

    @Override
    def addOneWinningInfo() {
        //update winning info
    }

    @Override
    def updateWinningInfo() {
        //delete info
        deleteAllWinningInfo()
        //get win info
        initWinningInfo()
        //insert info
        addAllWinningInfo()
    }

    @Override
    def deleteAllWinningInfo() {
        //delete winning info
    }

    /**
     * 당첨번호별 당첨 횟수 통계
     *  - flag 1: 1등번호+보너스번호의 번호별 당첨 횟수
     *  - flag 2: 1등번호의 번호별 당첨 횟수
     *  - flag 3: 보너스번호의 번호별 당첨 횟수
     * @param flag
     * @return
     */
    @Override
    def getWinningCountByNumbers(int flag) {

        def lastRoundNo
        def countByNum

        if(allWinningInfo == null || allWinningInfo.size() == 0) {
            initWinningInfo()
        }
        lastRoundNo = allWinningInfo.size()

        switch (flag) {
            case 1:
                totalWinningCountByNum = new WinningCountByNum()
                totalWinningCountByNum = convertService.convertArrayToClass(totalCount, WinningCountByNum)
                countByNum = totalWinningCountByNum
                break
            case 2:
                winningCountByNum = new WinningCountByNum()
                winningCountByNum = convertService.convertArrayToClass(winningCount, WinningCountByNum)
                countByNum = winningCountByNum
                break
            case 3:
                bonusCountByNum = new WinningCountByNum()
                bonusCountByNum = convertService.convertArrayToClass(bonusCount, WinningCountByNum)
                countByNum = bonusCountByNum
                break
            default:
                totalWinningCountByNum = new WinningCountByNum()
                totalWinningCountByNum = convertService.convertArrayToClass(totalCount, WinningCountByNum)
                countByNum = totalWinningCountByNum
                break
        }

        return ["lastRoundNo" : lastRoundNo,
                "winningCountByNum" : countByNum
        ]
    }

}
