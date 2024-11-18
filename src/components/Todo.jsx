import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { deleteTodo } from '../redux/ActionFunc'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {
    const {items} = useSelector((prev) => prev)
    const dispatch = useDispatch()

    const notify = (a) => toast.success(`Success deleted ` + a);

    const DeleteHandler = (id , text) => {
        dispatch(deleteTodo(id))
        notify(text)
    }


  return (
    <div>
    <ToastContainer />
      {items.map((el) => {
        return (
            <div key={el.id} >
                <List onClick={() => DeleteHandler(el.id , el.text)} >{el.text}</List>
            </div>
        )
      })}
    </div>
  )
}

export default Todo;

const List = styled.h1`
    width: 50%;
    color: white;
    background-color: blue;
    border-radius: 5px;
    font-size: 1rem;
    padding: 10px 0px;
    margin: auto;
    margin-top: 20px;
    &:hover{
        background-color: chartreuse;
        cursor: pointer;
    }
`
