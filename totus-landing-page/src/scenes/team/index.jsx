import TeamMemberIcon from "../../components/TeamMemberIcon";

const Team = () => {
    return <section class="container py-5 my-md-3 my-lg-5">
        <h2 class="h1 text-center pt-1 pb-3 mb-3 mb-lg-4">The 2023 Team</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

            <TeamMemberIcon name="Borui Chen" role="Project Co-Lead" imageLoc="assets/img/team/borui.jpg" linkedInUrl="https://www.linkedin.com/in/borui-chen/" />
            <TeamMemberIcon name="Evangeline Sturges" role="Project Co-Lead" imageLoc="assets/img/team/Evangeline.jpg" linkedInUrl="https://www.linkedin.com/in/evangeline-sturges-206b3a199/" />
            <TeamMemberIcon name="Liam Smith" role="Communications" imageLoc="assets/img/team/liam.jpg" linkedInUrl="#" />
            <TeamMemberIcon name="Daniel Cao" role="Vision Lead" imageLoc="assets/img/team/Daniel.jpg" linkedInUrl="https://www.linkedin.com/in/daniel-cao-5a92451ab/" />
        </div>

        <div class="row align-items-center mt-4 mb-5">
            <div class="col"></div>
            <TeamMemberIcon name="Tirrn Gunawardana" role="Software Lead" imageLoc="assets/img/team/Tirrn.jpg" linkedInUrl="#https://www.linkedin.com/in/tirrn-gunawardana-91a5951b7/"/>   
            <TeamMemberIcon name="Yuqi Wu" role="Mechanical Lead" imageLoc="assets/img/team/Yuqi.jpg" linkedInUrl="#"/>   
            <TeamMemberIcon name="Alexander Ollman" role="Founder & CEO" imageLoc="assets/img/team/alex.jpg" linkedInUrl="https://www.linkedin.com/in/aollman/"/>   
            <div class="col"></div>
        </div>
    </section>
}


export default Team; 
