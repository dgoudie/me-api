package systems.stan.me_api.model

class Info {

    var name: String = ""

    var title: String = ""

    var links: List<Link> = ArrayList()

    var about: List<String> = ArrayList()

    var education: List<EducationItem> = ArrayList()

    var workExperience: List<WorkExperienceItem> = ArrayList()

    var interests: List<String> = ArrayList()

    var topSkills: List<TopSkill> = ArrayList()

    var builtWith: List<BuiltWithItem> = ArrayList()

}