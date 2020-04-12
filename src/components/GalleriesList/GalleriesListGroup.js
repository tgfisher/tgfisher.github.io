import React, { Component } from 'react';
import { Button,
         ListGroup,
         ListGroupItem,
         UncontrolledTooltip } from 'reactstrap';
import { Link } from 'react-router-dom';

import { FaCameraRetro } from 'react-icons/fa'
import './GalleriesListGroup.css'

class GalleriesListGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            max_galleries: 5,
        };
    }

    renderMedium = gallery => {
        const medium = gallery.medium;
        if (medium.type && medium.format && medium.body){
            const kit = medium.body + ' ' + medium.model + 
                ': ' + medium.format + ' ' + medium.type;
            const captureId =  gallery.name + gallery.date;

            return (
                <span>
                    <FaCameraRetro color="#66023c" id={captureId} />
                    <UncontrolledTooltip 
                        autohide={ false }
                        placement="right"
                        target={captureId}
                    >
                        { kit }
                    </UncontrolledTooltip>
                </span>
            );
        }
    }

    renderGalleryName = gallery => {
        return (
            <span>
                <strong className="gallery-bold">{gallery.name}</strong>
            </span>
        );
    }

    renderGalleries = galleries => {
        if (galleries.length === 0) {
            return <div> ...no photos :( </div>;
        }

        var gallery_render_list = galleries.map( gallery => {
            gallery.medium.urls = gallery.urls
            let gallery_notes = null;
            if (gallery.comments.length > 0) {
                gallery_notes = (
                    <span>
                        <br />
                        <hr />
                        <p>{gallery.comments}</p>
                    </span>
                );
            }

            return (
                <span key={gallery.name}>
                    <ListGroupItem>
                        <Link to={`/art/${gallery.link}`}>
                            {this.renderGalleryName(gallery)}
                        </Link>
                        {' '}
                        {this.renderMedium(gallery)}
                        {gallery_notes}
                    </ListGroupItem>
                    <br/>
                </span>
            );
        });
        const n_galleries = gallery_render_list.length;
        let gallery_render_wrapper = <div>{gallery_render_list}</div>;
        if (n_galleries > this.state.max_galleries) {
            var n_hidden = this.props.galleries.length - this.state.max_galleries;
            gallery_render_list = gallery_render_list.slice(
                0,
                this.state.max_galleries
            );
            gallery_render_wrapper = (
                <div>
                    {gallery_render_list}
                    <br/>
                    <Button 
                        color="primary" 
                        onClick={e => {
                            this.setState({
                                max_galleries: this.state.max_galleries + 5,
                            })
                        }}
                    >
                        {' '}
                        See ({n_hidden} More Galleries){' '}
                    </Button>
                </div>
            );
        }
        return gallery_render_wrapper;
    }

    render() {
        return <ListGroup>{this.renderGalleries(this.props.galleries)}</ListGroup>;
    }
}

export default GalleriesListGroup
