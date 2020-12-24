function Footer()
{
    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-12 mx-auto">
                    <p>Welcome to DACA Analytics!</p>
                    <p>
                        This is a project born out of a desire to better visualize the make-up of DACA Beneficiaries as well as the performance of the program throughout its lifetime.
                        All of the data presented in this application was extracted from official USCIS reports found on the <a href="https://www.uscis.gov/tools/reports-and-studies/immigration-and-citizenship-data">USCIS Immigration and Citizenship Data</a> webpage.
                    </p>
                    <p>
                        The sections below describe the information that you can find in the two visualization tools, population and performance, respectively.
                        I will continue to update these tools with additional visualizations of the existing data, as well as visualizations for new data that I haven't gotten a chance to explore as much, such as performance data per birth country and by state of residence, to name a couple.
                    </p>
                    <p>
                        Some of the numbers in the datasets were ommitted in the USCIS reports since the number was under 10 and therefore could potentially identify individual recipients.
                        In the reports, they were marked as 'D'. In the visualizations on this site, I have gone ahead and just marked them as zero instead. So please note that some of the results marked zero may actually be an undisclosed number less than 10.
                    </p>
                    <h5>Population Data</h5>
                    <p>
                        The population data visualization tool focuses on the characteristics of active DACA recipients.
                        It examines the trends in population for a given category over time.   
                    </p>
                    <p>
                        The first three categories explored are population by age group, sex, and marital status.
                        In the given line and bar charts, we can explore how the population has changed over time for each given group as well how each option compares to the rest.
                    </p>
                    <p>
                        The other two categories explored are population by birth country and by state of residence.
                        In the tools provided, you can select a country or state from the drop-down lists and examine the population changes for the given country/state throughout the years.
                        I am working on adding a couple more visualizations using this data, making use of the geo properties of the data to enhance the user experience by plotting it on geo maps.
                    </p>
                    <h5>Performance Data</h5>
                    <p>The performance data visualization tool explores the administrative data provided by USCIS regarding DACA.</p>
                    <p>
                        In this tool, we can explore the volume of applications received by USCIS throughout the years and how many were accepted and rejected.
                        We are also able to explore the accepted applications further by examining how many were accepted, rejected and pending for a given year.
                    </p>
                    <p>There are some additional visualizations that I will add to this tool such as the performance data for a given country of birth and state of residence, as well as additional performance data such as number of expiring permits for a given month in the current year.</p>
                    <h5>About The Creator</h5>
                    <p>
                        My name is Joel, I am a 23-year-old DACA recipient originally from Mexico. I have lived in the US since the age of 8 and have been a DACA recipient since shortly after the program's creation—2013.
                        As most DACA recipients will tell you, DACA has opened up a lot of opportunities for those of us lucky enough to qualify.
                        The work authorization it provides along with the deferred action helped me find a way through college and allowed me to enter the workforce following my graduation in 2018.
                        I joined Microsoft as a software engineer following my college graduation where I get to contribute to building the calling and meetings services that power Microsoft Teams and Skype alongside an amazing team of engineers.
                    </p>
                    <p>
                        Learn more about me and what I am up to it at my <a href="https://joelhmarquez.com" target="_blank" rel="noreferrer">personal site</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;