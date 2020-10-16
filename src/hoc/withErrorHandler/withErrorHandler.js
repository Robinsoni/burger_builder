import React, { Component } from 'react'

import Modal from '../../components/UI/Modal/Modal'
import Aux from '../../hoc/Auxiliary'

const withErrorHandler  = (WrappedComponent,axios) => {

    return class extends Component { // Anonymous function

        state = {
            error:null
        }
        componentDidMount(){
            axios.interceptors.request.use(response =>{
                console.log('getResponse',response)
                this.setState({error:null})
            })
            
            axios.interceptors.response.use(null,error =>{
                //console.log('hi',error)
               // this.setState({error:error});
            })
        }
        errorConfirmedHandler = () => {
            this.setState({error:null})
        }

        render(){

            return (
            
                <Aux>
                    <Modal ordered={this.state.error}
                    hideModal = {this.state.errorConfirmedHandler}>
                        {this.state.error?this.state.error.message:null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )

        }
        
    }
}
export default withErrorHandler