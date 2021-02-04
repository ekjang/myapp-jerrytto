package my.app.jerrytto.recommend.service

import java.util.Map.Entry
import com.fasterxml.jackson.databind.ObjectMapper
import my.app.jerrytto.statistics.model.WinningCountByNum
import my.app.jerrytto.statistics.service.StatisticsService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

/**
 * Created by ekjan.
 *   Date : 2021-01-28 오후 6:19
 */
@Service
class RecommendServiceImpl implements RecommendService {

    @Autowired
    StatisticsService statisticsService

    @Override
    def randomRecommend(List selectedNumbers) {
        return getRandom(selectedNumbers)
    }

    @Override
    def manyWinRecommend() {
        int bundle = 5
        Set bundleNumbers = new HashSet()
        while(bundleNumbers.size() < 5) {
            def winInfo = statisticsService.getTotalCountByNumbers()
            int lastRoundNo = winInfo.lastRoundNo
            WinningCountByNum winningCountByNum = winInfo.totalWinningCountByNum
            ObjectMapper objectMapper = new ObjectMapper()
            Map<String, Integer> convert = objectMapper.convertValue(winningCountByNum, Map.class)

//        List<Entry<String, Integer>> sorted = new ArrayList<Entry<String, Integer>>(convert.entrySet())
//        Collections.sort(sorted, new Comparator<Entry<String, Integer>>() {
//            @Override
//            int compare(Entry<String, Integer> o1, Entry<String, Integer> o2) {
//                // 내림 차순으로 정렬
//                return o2.getValue().compareTo(o1.getValue());
////                // 오름 차순으로 정렬
////                return o1.getValue().compareTo(o2.getValue());
//            }
//        })

            int sumWeight = lastRoundNo * 7

            Map<String, Double> weight = new HashMap<String, Double>()
            convert.each { key, val ->
                weight.put(key, Double.valueOf(val.toString()) / sumWeight)
            }

            Random rand = new Random();
//            return getWeightedRandom(weight, rand)
            bundleNumbers.add(getWeightedRandom(weight, rand))
        }
        return bundleNumbers
    }

    @Override
    def fewWinRecommend() {
        return null
    }

    @Override
    def specialRecommend() {
        return null
    }

    @Override
    def customRecommend() {
        return null
    }

    def getRandom(List selectedNumbers) {
        Set lottoNumbers = new HashSet()

        while(lottoNumbers.size() < 7) {
            def n = selectedNumbers[Math.floor(Math.random() * selectedNumbers.size())]
            if (!lottoNumbers.contains(n)) {
                lottoNumbers.add(n)
            }
        }
        return lottoNumbers
    }

//    public static <E> E getWeightedRandom(Map<E, Double> weights, Random random) {
    def getWeightedRandom(Map<String, Double> weights, Random random) {
        Set lottoNumbers = new HashSet()

        while(lottoNumbers.size() < 7) {

            def result = null;
            double bestValue = Double.MAX_VALUE;

            for (String element : weights.keySet()) {
                double value = -Math.log(random.nextDouble()) / weights.get(element);
                if (value < bestValue) {
                    bestValue = value;
                    result = element;
                }
            }

//            return result;
            def n = Integer.parseInt((result.toString()).replace("num", ""))
            if (!lottoNumbers.contains(n)) {
                lottoNumbers.add(n)
            }
        } //end of while
        return lottoNumbers
    }

}
