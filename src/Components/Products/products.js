import React, { Component } from 'react'
import ProductitemComponent from '../ProductItem/Productitem';
import { connect } from 'react-redux'


class ProductsComponent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {this.props.productList.filter(item => item.type === this.props.choosenCategory).map((item,index) => (
                        <div className="col-4" key={index}>
                        <ProductitemComponent item={item} />
                    </div>
                    ))}   
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
     productList : state.products,
     choosenCategory: state.choosenCategory
});

export default connect(mapStateToProps) (ProductsComponent);
