import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { clearError, selectErrorMassage } from '../../redux/slices/errorSlice';

const Error = () => {
    const errorMessage = useSelector(selectErrorMassage)
    const dispatch = useDispatch()

    useEffect(() => {
        if (errorMessage) {
            toast.info(errorMessage)
            dispatch(clearError())
        }
    }, [errorMessage, dispatch])
    // toast.test('Test message!') и многие другие варрианты мщжно найти благодаря npm react-toastify
    return <ToastContainer position="top-right" autoClose={2000} />
}

export default Error 