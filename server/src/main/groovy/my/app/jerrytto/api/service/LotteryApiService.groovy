package my.app.jerrytto.api.service

/**
 * Created by ekjan.
 *   Date : 2021-01-28 오후 1:07
 */
interface LotteryApiService {

    def getLottoNumAll()
    def getLottoNumByRound(int roundNo)
    def getLottoNumByRound(int returnType, int roundNo)
}