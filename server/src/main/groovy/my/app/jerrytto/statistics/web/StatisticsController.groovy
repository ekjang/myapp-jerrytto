package my.app.jerrytto.statistics.web

import my.app.jerrytto.statistics.service.StatisticsService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/**
 * Created by ekjan.
 *   Date : 2021-01-29 오후 2:41
 */
@CrossOrigin
@RestController
@RequestMapping("statistics")
class StatisticsController {

    @Autowired
    StatisticsService statisticsService

    @GetMapping("summary")
    def getSummary() {
        statisticsService.getSummary()
    }

    @GetMapping("initInfo")
    def getAllWinningInfo() {
        statisticsService.initWinningInfo()
    }

    /**
     * 보너스번호 포함한 당첨번호들의 번호별 당첨 횟수 통계
     *  - flag : 1
     * @return
     */
    @GetMapping("totWinCntNum")
    def getTotalCountByNumbers() {
        statisticsService.getWinningCountByNumbers(1)
    }

    /**
     * 보너스번호 제외한 1등 당첨번호들의 번호별 당첨 횟수 통계
     *  - flag : 2
     * @return
     */
    @GetMapping("winCntNum")
    def getWinningCountByNumbers(int flag) {
        statisticsService.getWinningCountByNumbers(2)
    }

    /**
     * 보너스번호의 번호별 당첨 횟수 통계
     *  - flag : 3
     * @return
     */
    @GetMapping("bonusCntNum")
    def getBonusCountByNumbers() {
        statisticsService.getWinningCountByNumbers(3)
    }
}
