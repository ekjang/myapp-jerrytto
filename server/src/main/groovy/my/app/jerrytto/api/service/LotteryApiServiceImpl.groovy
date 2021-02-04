package my.app.jerrytto.api.service

import com.google.gson.JsonObject
import com.google.gson.JsonParser
import my.app.jerrytto.api.model.LottoRound
import my.app.jerrytto.common.UrlPath
import org.springframework.http.HttpEntity
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpMethod
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate
import org.springframework.web.util.UriComponents
import org.springframework.web.util.UriComponentsBuilder

/**
 * Created by ekjan.
 *   Date : 2021-01-28 오후 1:09
 */
@Service
class LotteryApiServiceImpl implements LotteryApiService {

    String url = UrlPath.LOTTERY_GET_NUM.getValue()

    @Override
    def getLottoNumAll() {
        return null
    }

    @Override
    def getLottoNumByRound(int roundNo) {
        String urlByRound = makeUrl(roundNo)
        String body = getApiResponseData(urlByRound)
        LottoRound lottoRound = convertModel(body)
        ResponseEntity<LottoRound> responseEntity = convertResponseEntity(lottoRound)
        return responseEntity
    }

    @Override
    def getLottoNumByRound(int returnType, int roundNo) {
        def returnData
        String urlByRound = makeUrl(roundNo)
        String body = getApiResponseData(urlByRound)
        LottoRound lottoRound = convertModel(body)
        ResponseEntity<LottoRound> responseEntity = convertResponseEntity(lottoRound)

        switch (returnType) {
            case 1:
                returnData = body
                break
            case 2:
                returnData = lottoRound
                break
            case 3:
                returnData = responseEntity
                break
            default:
                returnData = responseEntity
                break
        }

        return returnData
    }

    def makeUrl(int roundNo) {
        String urlByRound = url + Integer.toString(roundNo)
        return urlByRound
    }

    def getApiResponseData(String urlByRound) {
        UriComponents uriComponents = UriComponentsBuilder.fromHttpUrl(urlByRound).build()
        RestTemplate restTemplate = new RestTemplate()
        HttpHeaders httpHeaders = new HttpHeaders()

        httpHeaders.set(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE)
        httpHeaders.set(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
        HttpEntity<?> httpEntity = new HttpEntity<>(httpHeaders)

        ResponseEntity<String> exchange = restTemplate.exchange(uriComponents.toUriString(), HttpMethod.GET, httpEntity, String.class)

        String body = exchange.getBody()
        return body
    }

    def convertModel(String body) {
        JsonObject obj = JsonParser.parseString(body).getAsJsonObject()
        LottoRound lottoRound = LottoRound.createLotto(obj)
        return lottoRound
    }

    def convertResponseEntity(LottoRound lottoRound) {
        return ResponseEntity.ok(lottoRound)
    }


}
