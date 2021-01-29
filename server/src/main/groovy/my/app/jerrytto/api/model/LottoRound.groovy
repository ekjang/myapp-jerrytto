package my.app.jerrytto.api.model

import com.google.gson.JsonObject

/**
 * Created by ekjan.
 *   Date : 2021-01-26 오후 6:20
 */
class LottoRound {
    Long id;

    String returnValue  //데이터 존재 여부
    BigDecimal totSell = BigDecimal.ZERO;    //총 판매금액
    String roundDate;    //추첨일
    String whichRound;      //몇 회차
    BigDecimal winnerMoney = BigDecimal.ZERO;    //1등 상금
    BigDecimal allWinnersMoney = BigDecimal.ZERO;    //총 1등 당첨자들 합산금액
    int firstNum;   //번호1
    int secondNum;   //번호2
    int thirdNum;   //번호3
    int fourthNum;   //번호4
    int fifthNum;   //번호5
    int sixthNum;   //번호6
    int bonusNum;   //보너스 번호

    public static LottoRound createLotto(JsonObject body){
        LottoRound entity = new LottoRound();
        entity.returnValue = body.get("returnValue").getAsString();

        if(entity.returnValue.equalsIgnoreCase("success")) {
            entity.totSell = body.get("totSellamnt").getAsBigDecimal();
            entity.roundDate = body.get("drwNoDate").getAsString();
            entity.whichRound = body.get("drwNo").getAsString();
            entity.winnerMoney = body.get("firstWinamnt").getAsBigDecimal();
            entity.allWinnersMoney = body.get("firstAccumamnt").getAsBigDecimal();
            entity.firstNum = body.get("drwtNo1").getAsInt();
            entity.secondNum = body.get("drwtNo2").getAsInt();
            entity.thirdNum = body.get("drwtNo3").getAsInt();
            entity.fourthNum = body.get("drwtNo4").getAsInt();
            entity.fifthNum = body.get("drwtNo5").getAsInt();
            entity.sixthNum = body.get("drwtNo6").getAsInt();
            entity.bonusNum = body.get("bnusNo").getAsInt();
        }

        return entity;
    }
}
