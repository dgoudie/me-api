package systems.stan.me_api.service

import org.springframework.stereotype.Service
import systems.stan.me_api.model.Info
import systems.stan.me_api.repository.InfoRepository

@Service
class InfoService(private val infoRepository: InfoRepository) {
    fun getInfo(): Info {
        return infoRepository.get()
    }
}