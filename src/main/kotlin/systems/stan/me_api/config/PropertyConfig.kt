package systems.stan.me_api.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration

@Configuration
class PropertyConfig {

    @Value("\${spring.data.mongodb.host}")
    var mongodbHost: String = ""

    @Value("\${spring.data.mongodb.port}")
    var mongodbPort: Int = 0

    @Value("\${spring.data.mongodb.database}")
    var mongodbDatabase: String = ""

    @Value("\${spring.data.mongodb.username}")
    var mongodbUserName: String = ""

    @Value("\${spring.data.mongodb.password}")
    var mongoDbPassword: CharArray = CharArray(0)
}
