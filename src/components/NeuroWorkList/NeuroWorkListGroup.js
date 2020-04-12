import React, { Component }  from 'react';
import { ListGroup, ListGroupItem} from 'reactstrap';
import moment from 'moment';
import { FaPaperPlane } from 'react-icons/fa';

import mywork from '../../mywork.json';

class NeuroWorkListGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pubs: mywork.pubs,
        };
    };

    renderPublication = pub => {
        let authors = '';
        const title = ' "' + pub.title + '." ';
        let details = '';
        const publication_year = moment(pub.date).format('YYYY');
        // combine authors
        if (pub.authors.length === 1) {
            //just me
            authors += pub.authors[0];
        } else if (pub.authors.length >= 2) {
            authors += pub.authors.shift();
            for (const curr_author of pub.authors) {
                // add authors
                authors += ', ' + curr_author;
            }
        } else {
            authors += ' test  ';
        }
        //format details 
        if (pub.details.publisher && pub.details.specifics) {
            details += ' ' + pub.details.publisher + ', ' + 
                pub.details.specifics + ', '+ publication_year + '.';
        } else if (pub.details.publisher) {
            details += ' ' + pub.details.publisher + ', ' + publication_year + '.'
        } else {
            details += ' ';
        }

        let publication_wrapper = (
            <div>
                {authors}
                {title}
                {details}
            </div>
        );
        return publication_wrapper;
    };

    renderPaperLink = pub => {
        if (pub.details.url) {
            return (
                <span>
                    <a href={pub.details.url}>
                        <FaPaperPlane/>
                    </a>
                </span>
            );
        }
    }
    
    renderPublications = pubs => {
        if (pubs.length === 0) {
            return <div> working on it... </div>;
        } 

        var publication_render_wrapper = pubs.map( pub => {
            return (
                <span key={pub.title + pub.date}>
                    <ListGroupItem>
                        {this.renderPublication(pub)}
                        {this.renderPaperLink(pub)}
                    </ListGroupItem>
                    <br />
                </span>
            );
        });
        return publication_render_wrapper;
    };

    render() {
        return <ListGroup>{this.renderPublications(this.props.pubs)}</ListGroup>;
    }
}

export default NeuroWorkListGroup;
