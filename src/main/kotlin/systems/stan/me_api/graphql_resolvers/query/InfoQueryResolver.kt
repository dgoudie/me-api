package systems.stan.me_api.graphql_resolvers.query

import com.coxautodev.graphql.tools.GraphQLQueryResolver
import org.springframework.stereotype.Service
import systems.stan.me_api.model.Info
import systems.stan.me_api.service.InfoService

@Service
class InfoQueryResolver(private val infoService: InfoService) : GraphQLQueryResolver {
    fun info(): Info {
        return infoService.getInfo()
    }
}
