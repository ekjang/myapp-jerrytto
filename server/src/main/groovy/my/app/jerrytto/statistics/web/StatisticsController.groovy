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

    @GetMapping("totWinCntNum")
    def getTotalCountByNumbers() {
        statisticsService.getTotalCountByNumbers()
    }

    @GetMapping("winCntNum")
    def getWinningCountByNumbers() {
        statisticsService.getWinningCountByNumbers()
    }

    @GetMapping("bonusCntNum")
    def getBonusCountByNumbers() {
        statisticsService.getBonusCountByNumbers()
    }
}
