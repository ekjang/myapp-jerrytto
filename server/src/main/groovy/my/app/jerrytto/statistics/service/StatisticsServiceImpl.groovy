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


    List<LottoRound> allWinningInfo
    WinningCountByNum totalWinningCountByNum
    WinningCountByNum winningCountByNum
    WinningCountByNum bonusCountByNum
    int[] totalCount
    int[] winningCount
    int[] bonusCount

    @Override
    def getSummary() {
        if(allWinningInfo == null || allWinningInfo.size() == 0) {
            initWinningInfo()
            getWinningCountByNumbers()
            getBonusCountByNumbers()
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

    @Override
    def getTotalCountByNumbers() {
        if(allWinningInfo == null || allWinningInfo.size() == 0) {
            initWinningInfo()
        }
        totalWinningCountByNum = new WinningCountByNum()
        totalWinningCountByNum = convertService.convertArrayToClass(totalCount, WinningCountByNum)
        return ["lastRoundNo" : allWinningInfo.size(),
                "totalWinningCountByNum" : totalWinningCountByNum
        ]
    }

    @Override
    def getWinningCountByNumbers() {
        if(allWinningInfo == null || allWinningInfo.size() == 0) {
            initWinningInfo()
        }
        winningCountByNum = new WinningCountByNum()

        winningCountByNum = convertService.convertArrayToClass(winningCount, WinningCountByNum)
        return ["lastRoundNo" : allWinningInfo.size(),
                "winningCountByNum" : winningCountByNum
        ]
    }

    @Override
    def getBonusCountByNumbers() {
        if(allWinningInfo == null || allWinningInfo.size() == 0) {
            initWinningInfo()
        }
        bonusCountByNum = new WinningCountByNum()
        bonusCountByNum = convertService.convertArrayToClass(bonusCount, WinningCountByNum)
        return ["lastRoundNo" : allWinningInfo.size(),
                "bonusCountByNum" : bonusCountByNum
        ]
    }
}
