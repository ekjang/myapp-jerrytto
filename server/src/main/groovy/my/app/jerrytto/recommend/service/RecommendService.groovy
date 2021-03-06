package my.app.jerrytto.recommend.service

/**
 * Created by ekjan.
 *   Date : 2021-01-28 오후 1:59
 */
interface RecommendService {
    def randomRecommend(List selectedNumbers)
    def manyWinRecommend(int bundle)
    def fewWinRecommend(int bundle)
    def specialRecommend()
    def customRecommend()
}