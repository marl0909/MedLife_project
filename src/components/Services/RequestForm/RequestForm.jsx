import React, {useState} from "react";
import {useForm} from "react-hook-form";
import './RequestForm.css'
import closeForm from './../../../assets/img/close-menu.png'
import logo from './../../../assets/img/logo.png'

export const RequestForm = (props) => {
    const {register, handleSubmit, watch, formState: {errors, isValid}, reset} = useForm({
        mode: "onBlur",
    });
    const onSubmit = () => reset();
    // const [isCloseOverlay, closeOverlay] = useState(false)

    return (
        <div className={'overlay'}>
            <div className={'form-wrapper'}>
                <img className={'form-wrapper__logo'} src={logo}/>
                <div className={'form-content'}>
                    <img onClick={() => props.SetIsFormOpen(false)} className={'form-btn-closer'} src={closeForm}/>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input {...register('firstName', {
                            required: 'This field must be filled!',
                            maxLength: {
                                value: 30,
                                message: 'Maximum 30 characters!',
                            }
                        })} placeholder={'First name'}/>
                        <div style={{height: 26}}>
                            {errors?.firstName && <span className={'text-error'}>{errors?.firstName?.message}</span>}
                        </div>
                        <input {...register('lastName', {
                            required: 'This field must be filled!',
                            maxLength: {
                                value: 30,
                                message: 'maximum 30 characters',
                            }
                        })} placeholder={'Last name'}/>
                        <div style={{height: 26}}>
                            {errors?.lastName &&  <span className={'text-error'}>{errors?.lastName?.message}</span>}
                        </div>
                        <input {...register('email', {
                            required: 'This field must be filled!',
                            pattern: {
                                value: /^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i,
                                message: 'Email is not correct!'
                               },
                        })} placeholder={'Email'}/>
                        <div style={{height: 26}}>
                            {errors?.email &&  <span className={'text-error'}>{errors?.email?.message}</span>}
                        </div>
                        <button disabled={!isValid}>Request  an appointment</button>
                    </form>
                </div>
            </div>
        </div>
    )
}