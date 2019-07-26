import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Form, Card, Image } from 'semantic-ui-react'
import { fetchData, addData } from '../store/actions'

const Smurfs = (props) => {
    const [input, setInput] = useState({
        smurfs: {
            name: '',
            age: '',
            height: '',
            image: ''
        }
    })

    useEffect(()=> {
    props.fetchData()

    }, [])

    const handleChanges = (e) => {
        setInput({ 
            smurfs: {
                ...input.smurfs,
            [e.target.name]: e.target.value 
        }
    })
}

    const addSmurf = (e) => {
        e.preventDefault()
        props.addData(input.smurfs)
        setInput({
            smurfs: {
                name: '',
                age: '',
                height: '',
                image: ''
            }
        })
        
    }

    

    if (props.isFetching) {
       return <h2>Loading...</h2>
    }

    console.log(input.smurfs.name)
    console.log(input.smurfs.age)
    return (
        <div >
            <div className="smurfs">
            {props.smurfs.map(smurf => {
                return <Card >
                    <Image src={smurf.image} alt='smurf'></Image>
                    <Card.Content>
                        <Card.Header><p>{smurf.name}</p></Card.Header>
                        <Card.Description>
                            <p>Age: {smurf.age}</p>
                            <p>Height: {smurf.height}</p>
                        </Card.Description>
                    </Card.Content>
                </Card>
            })}
            </div>
            <div className="form-background">
            <Form >
                <Form.Field width="4">
                    <input
                    placeholder="name"
                    type="text"
                    name="name"
                    onChange={handleChanges}
                    value={input.smurfs.name}
                />
                </Form.Field>
                 <Form.Field width="4">
                    <input
                    placeholder="age"
                    type="text"
                    name="age"
                    onChange={handleChanges}
                    value={input.smurfs.age}
                />
                </Form.Field>
                <Form.Field width="4">
                    <input
                    placeholder="height"
                    type="text"
                    name="height"
                    onChange={handleChanges}
                    value={input.smurfs.height}
                /> 
                </Form.Field>
                <Form.Field width="4">
                    <input
                    placeholder="image url"
                    type="text"
                    name="image"
                    onChange={handleChanges}
                    value={input.smurfs.image}
                /> 
                </Form.Field>
                <button onClick={addSmurf}>Submit</button>
            </Form>
            </div>
        </div>
    )
}



const mapStateToProps = state => {
    console.log(state)
    return {
        error: state.error,
        isFetching: state.isFetching,
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps,
    { fetchData, addData }
)(Smurfs)