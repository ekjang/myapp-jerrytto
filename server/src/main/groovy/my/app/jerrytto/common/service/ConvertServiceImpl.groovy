package my.app.jerrytto.common.service

import org.springframework.stereotype.Service

import java.lang.reflect.Field

/**
 * Created by ekjan.
 *   Date : 2021-01-29 오후 1:47
 */
@Service
class ConvertServiceImpl implements ConvertService {

    @Override
    def convertArrayToClass(int[] array, Class aClass){
        def convClass = aClass.newInstance()
        Field[] fields = convClass.class.getDeclaredFields()
        for(Field field : fields) {
            if(!field.isAccessible()) {
                field.setAccessible(true)
            }
        }

        for(int i = 0; i < array.size(); i++) {
            fields[i].set(convClass, array[i])
        }

        return convClass
    }
}
