package systems.stan.me_api.repository

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.query.Query
import org.springframework.stereotype.Repository
import systems.stan.me_api.model.Info
import java.lang.RuntimeException

@Repository
class InfoRepository @Autowired
constructor(private val mongoTemplate: MongoTemplate) {

    fun get(): Info {
        return mongoTemplate.findOne(Query(), Info::class.java, COLLECTION_NAME) ?: throw RuntimeException("Could not locate INFO in database")
    }

    companion object {
        private const val COLLECTION_NAME = "INFO"
    }
}