package my.app.jerrytto.api.web

import com.fasterxml.jackson.core.JsonProcessingException
import my.app.jerrytto.api.model.LottoRound
import my.app.jerrytto.api.service.LotteryApiService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

/**
 * Created by ekjan.
 *   Date : 2021-01-26 오후 6:05
 */
@CrossOrigin
@RestController
@RequestMapping("lotto")
class LotteryApiController {

    @Autowired
    LotteryApiService lotteryApiService

    @GetMapping("win-num-by-round")
    public @ResponseBody ResponseEntity<LottoRound> getLottoNumByRound(int roundNo) throws JsonProcessingException {
        ResponseEntity<LottoRound> result = lotteryApiService.getLottoNumByRound(roundNo)
        return result
    }

}
