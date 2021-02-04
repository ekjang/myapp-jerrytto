package my.app.jerrytto.common

/**
 * Created by ekjan.
 *   Date : 2021-01-28 오후 1:11
 */
enum UrlPath {
    LOTTERY_HOME("https://www.dhlottery.co.kr")
    , LOTTERY_GET_NUM("https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=")


    String value

    UrlPath(String value) {
        this.value = value
    }

    String getKey() {
        return name
    }

    String getValue() {
        return value
    }
}