package my.app.jerrytto.recommend.service

import java.util.Map.Entry
import com.fasterxml.jackson.databind.ObjectMapper
import my.app.jerrytto.statistics.model.WinningCountByNum
import my.app.jerrytto.statistics.service.StatisticsService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

import java.util.stream.Collector
import java.util.stream.Collectors

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
        List bundleNumbers = new ArrayList()
        while(bundleNumbers.size() < 5) {
            def winInfo = statisticsService.getWinningCountByNumbers(1)
            int lastRoundNo = winInfo.lastRoundNo
            WinningCountByNum winningCountByNum = winInfo.winningCountByNum
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

    /**
     * 랜덤 번호 추출 알고리즘
     * @param selectedNumbers
     * @return
     */
    def getRandom(List selectedNumbers) {
        List lottoNumbers = new ArrayList()

        while(lottoNumbers.size() < 7) {
            def n = selectedNumbers[Math.floor(Math.random() * selectedNumbers.size())]
            if (!lottoNumbers.contains(n)) {
                lottoNumbers.add(n)
            }
        }
        return lottoNumbers
    }

    /**
     * 당첨이 많된 번호의 가중치 부여한 추출 알고리즘
     * @param weights
     * @param random
     * @return
     */
    def getWeightedRandom(Map<String, Double> weights, Random random) {
        List lottoNumbers = new ArrayList()

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

            def n = Integer.parseInt((result.toString()).replace("num", ""))
            if (!lottoNumbers.contains(n)) {
                lottoNumbers.add(n)
            }
        } //end of while
        return lottoNumbers
    }

}
