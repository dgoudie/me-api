package systems.stan.me_api.config

import com.mongodb.MongoClient
import com.mongodb.MongoClientOptions
import com.mongodb.MongoCredential
import com.mongodb.ServerAddress
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.core.MongoTemplate

@Configuration
class DatabaseConfig @Autowired
constructor(private val propertyConfig: PropertyConfig){

    @Bean(name = ["mongoTemplate"])
    fun mongoTemplate(): MongoTemplate {
        val mongoCredential = MongoCredential.createCredential(
                propertyConfig.mongodbUserName,
                propertyConfig.mongodbDatabase,
                propertyConfig.mongoDbPassword
        )
        val mongoClient = MongoClient(
                ServerAddress(
                        propertyConfig.mongodbHost,
                        propertyConfig.mongodbPort
                ),
                mongoCredential,
                MongoClientOptions.builder().build()
        )
        return MongoTemplate(mongoClient, propertyConfig.mongodbDatabase)
    }
}