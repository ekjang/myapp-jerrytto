package my.app.jerrytto.statistics.service

/**
 * Created by ekjan.
 *   Date : 2021-01-29 오전 9:52
 */
interface StatisticsService {
    def getSummary()
    def initWinningInfo()
    def addAllWinningInfo()
    def addOneWinningInfo()
    def updateWinningInfo()
    def deleteAllWinningInfo()
    def getTotalCountByNumbers()
    def getWinningCountByNumbers()
    def getBonusCountByNumbers()
}