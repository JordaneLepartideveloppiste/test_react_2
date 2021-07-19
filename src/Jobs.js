import Job from "./Job"
import "./Jobs.css"

function Jobs() {
    return (
        <div className="jobs">
            <Job title="Full Time Sales Associate" contractType="CDI" country="Australia" city="Sydney" className="red" />
            <Job title="Agent de Sécurité" contractType="CDI" country="France" city="Paris" className="green" />
            <Job title="Responsable d'Atelier (H/F)" contractType="CDQ" country="France" city="Pantin" className="yellow" />
            <Job title="Chef de Projets" contractType="CDQ" country="France" city="Paris" className="blue" />
            <Job title="Développeur React.js" contractType="CDI" country="France" city="Paris" className="pink" />
            <Job title="Sales Associate" contractType="CDI" country="France" city="Paris" className="red" />
            <Job title="Vendeur/se" contractType="CDI" country="Suisse" city="Stockholm" className="green" />
            <Job title="CRM & Data Quality Analyst" contractType="CDI" country="USA" city="New-York" className="yellow" />
            <Job title="Infirmier (H/F)" contractType="CDI" country="France" city="Pantin" className="blue" />
        </div>
    )
}

export default Jobs
