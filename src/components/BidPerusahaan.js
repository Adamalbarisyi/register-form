import React, {Component} from 'react';
import axios from 'axios';

class BidPerusahaan extends Component{
    
    state = {
        data:[]
    }
    
    getData = () => {
        return new Promise((resolve,reject)=>{
            axios.get('https://widyaskilloka.com/api/v1/master/company-types')
            .then(result =>{
                resolve(result.data)
            }, error =>{
                reject(error)
            });
        });
    };
    
    componentDidMount = async () => {
        const data = await this.getData();
        this.setState({
            data: data.data
        })
        
    }
    
    render(){
        return(
            <div>
            <select className="form-control input-lg">
            {
                this.state.data.map(companyField => {
                    return <option key={companyField.id}>
                        {companyField.name}
                    </option>
                })
            }
                
            </select>
            </div>
        )
    }
}

export default BidPerusahaan;