package my.app.jerrytto.recommend.web

import my.app.jerrytto.recommend.service.RecommendService
import my.app.jerrytto.statistics.service.StatisticsService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/**
 * Created by ekjan.
 *   Date : 2021-01-28 오후 6:20
 */
@CrossOrigin
@RestController
@RequestMapping("/recommend")
class RecommendController {

    @Autowired
    RecommendService recommendService

    @GetMapping("random")
    def randomRecommend(List selectedNumbers) {
        recommendService.randomRecommend(selectedNumbers)
    }

    @GetMapping("many")
    def manyWinRecommend(int bundle) {
        return ["lottoNumbers": recommendService.manyWinRecommend(bundle)]

    }

    @GetMapping("few")
    def fewWinRecommend(int bundle) {
        return ["lottoNumbers": recommendService.fewWinRecommend(bundle)]
    }

    @GetMapping("special")
    def specialRecommend() {

    }

    @GetMapping("custom")
    def customRecommend() {

    }
}
