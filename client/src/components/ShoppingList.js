import React,{Component } from 'react';
import {connect} from 'react-redux';
import {getItems,deleteItem} from '../actions/itemAction';
import propTypes from 'prop-types';
import {Container,ListGroup,ListGroupItem,Item,Button} from 'reactstrap'
import {CSSTransition, TransitionGroup} from 'react-transition-group';


class ShoppingList extends Component{

componentDidMount(){
    this.props.getItems();
}

onDeleteOnClick(id){
    this.props.deleteItem(id);
}

render(){
    const {items} =this.props.item;

    return(
        <div>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({_id,name})=>(
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                            <ListGroupItem>
                            {this.props.isAuthenticated ? (
                                    <Button
                                    className='remove-btn'
                                    color='danger'
                                    size='sm'
                                    onClick={this.onDeleteOnClick.bind(this, _id)}
                                    >
                                    &times;
                                    </Button>
                                ) : null}
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </div>
    );
}
}

const mapStateToProps = (state)=>({
    item:state.item,
    isAuthenticated: state.auth.isAuthenticated
})

ShoppingList.propTypes = {
    getItems:propTypes.func.isRequired,
    item:propTypes.object.isRequired,
    deleteItem:propTypes.func.isRequired,
    isAuthenticated: propTypes.bool
}

export default connect(mapStateToProps,{getItems,deleteItem})(ShoppingList);