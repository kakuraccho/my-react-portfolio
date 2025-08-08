import { myWorks } from '../data/works';
import '../css/Page.css';
import '../css/WorkList.css'

const PortfolioPage = () => {
    return (
        <div className='page-content'>
            <h2>Portfolio</h2>
            
            <div className='work-list'>
                {myWorks.map(work => (
          <div key={work.id} className="work-item">
            <img src={work.imageUrl} alt={work.title} className="work-image" />
            <div className="work-details">
              <h3 className="work-title">{work.title}</h3>
              <p className="work-description">{work.description}</p>
              <a 
                href={work.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="work-button"
              >
                作品を見る
              </a>
            </div>
          </div>
        ))}
            </div>
        </div>
    );
};

export default PortfolioPage;