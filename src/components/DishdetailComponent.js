import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle , Breadcrumb , BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom'


   
        


    function renderDish(dish){
        if (dish!=null){
            return(
                <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle heading>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }

    function renderComments(dish){
        if (dish!=null){
            const comnt = dish.map((comnnt)=>
            <div>
             <p>{comnnt.comment}</p>
             <p>--{comnnt.author},{new Intl.DateTimeFormat('en-US',{year: 'numeric',month: 'short',day:'2-digit'}).format(new Date(Date.parse(comnnt.date)))}</p>
            </div>
             );
        return(
            <div className="col-12 col-md-5 mt-1">
         
               <CardTitle>Comments</CardTitle> 
            {comnt}  
           
            </div>
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }

    const DishDetail= (props)=>{
        const dish = props.dish

        console.log(dish);
        
        if (dish == null) {
            return (<div></div>);
        }

        const dishItem = renderDish(props.dish);
        const dishComment = renderComments(props.comments);

        return (
            <div className='container'>
                <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr/>
            </div>
                <div className='row'>
                    {dishItem}
                    {dishComment}
                </div>
            </div>
            </div>
        )
    }   

export default DishDetail;