function About()
{
    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-12 mx-auto">
                    <h4>Welcome to DACA Analytics!</h4>
                    <p>
                        This is a project born out of a desire to better visualize the make-up of DACA beneficiaries as well as the performance of the program throughout its lifetime.
                        All of the data presented in this application was extracted from official USCIS reports found on the <a href="https://www.uscis.gov/tools/reports-and-studies/immigration-and-citizenship-data">USCIS Immigration and Citizenship Data</a> webpage.
                    </p>
                    <p>
                        The sections below describe the information that can be found in the two visualization tools, population and performance, respectively.
                        I will continue to update these tools with additional visualizations of the existing data, as well as visualizations for new data that I haven't gotten a chance to explore as much, such as performance data per birth country and by state of residence, to name a couple.
                    </p>
                    <p>
                        USCIS decided to redact some of the data where the number of recipients was under 10 to avoid potentially identify individual recipients.
                        In the reports, they were marked as 'D'; in the visualizations on this site, they are marked as zero.
                        Because of that, please note that some of the results marked zero may actually be an undisclosed number less than 10.
                    </p>
                    
                    <h5>Population Data</h5>
                    <p>
                        The population data visualization tool focuses on the characteristics of active DACA recipients.
                        It examines the trends in population for a given category over time.   
                    </p>
                    <p>
                        There are three categories explored in these visualizations: population by age group, sex, and marital status.
                        In the given line charts, we can explore how the population has changed over time for each given group as well how each option compares to the rest.
                    </p>
                    <p>
                        The other two categories explored are population by birth country and by state of residence.
                        There are two visualizations for these categories.
                        The first are geomap visualizations where we can hover over a given country/state and see the population of DACA beneficiaries from the give country/state.
                        We can also toggle between year for which dataset we wish to use.
                        The second set of visualizations are line graphs in which we can select a country or state from the drop-down lists and examine the population changes throughout the years.
                    </p>
                    <p>Population data was only included from 2017 onwards and thus we don't have a complete picture, but the information that is available is quite interesting nonetheless.</p>
                    
                    <h5>Performance Data</h5>
                    <p>The performance data visualization tool explores the administrative data provided by USCIS regarding DACA.</p>
                    <p>
                        In this tool, we can explore the volume of applications received by USCIS throughout the years and how many were accepted and rejected.
                        We are also able to explore the accepted applications further by examining how many were accepted, rejected and pending for a given year.
                    </p>

                    <h5>About The Creator</h5>
                    <p>
                        My name is Joel Marquez, I am a former DACA recipient originally from Mexico. I have lived in the US since the age of 8 and was a DACA recipient since shortly after the program's creation.
                        As most DACA recipients will attest to, DACA has opened up a lot of opportunities for those of us lucky enough to qualify.
                    </p>
                    <p>
                        For me, the work authorization and deferred action helped me find a way through college where I graduated in the spring of 2018 with a computer science degree.
                        It also allowed me to enter the workforce as a professional following my graduation. I joined Microsoft as a software engineer out of college and have been there since.
                        I get to contribute alongside an amazing team of engineers to building the calling and meeting services that power Microsoft Teams and Skype.
                        It is truly a dream job and I am grateful to work on something that positively improves the lives of the millions of daily users.
                    </p>
                    <p>
                        Besides playing a big role in my career, Microsoft also played a big role in my immigration story. Shortly after joining the company in 2018, we began an employment-based permanent residency sponsorship process
                        and as of August 2021, I am now a US permanent resident. 
                    </p>
                    <p>
                        Learn more about me and what I am up to it at my <a href="https://joelhmarquez.com" target="_blank" rel="noreferrer">personal site</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;