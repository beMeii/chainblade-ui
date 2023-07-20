import { Button, Divider, Input, PasswordInput, Text } from '@mantine/core'
import { IconLock, IconMail } from '@tabler/icons-react'
import { yupResolver } from '@hookform/resolvers/yup';
import React, { SyntheticEvent } from 'react'
import { BsApple } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { useStyles } from './LoginBox.style'
import * as yup from 'yup';
import { useForm } from 'react-hook-form'
const schema = yup.object().shape({
    email: yup.string().required("*Email should not be empty").matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, '*Incorrect email format'),
    password: yup.string().required("*Password should not be empty").min(8, '*Password should have at least 8 characters')
})
const LoginBox : React.FC = () => {
    const { classes } = useStyles();
    const { register, handleSubmit, formState: {errors}, getValues } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = () => {
        console.log(getValues('email'))
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.form_wrapper}>
                    <Input.Wrapper>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <IconMail size="0.9em" color="#B37FEB" />
                            </div>
                            <Input.Label style={{ color: "#B37FEB" }}>Email</Input.Label>
                        </div>
                        <Input {...register('email')}  radius="sm" placeholder='yourname@gmail.com'></Input>
                        {errors.email && (<Text c="red">{errors.email.message}</Text>)}
                    </Input.Wrapper>
                    <br />
                    <Input.Wrapper>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <IconLock size="0.9em" color="#B37FEB" />
                            </div>
                            <Input.Label style={{ color: "#B37FEB" }}>Password</Input.Label>
                        </div>
                        <PasswordInput {...register('password')} radius="sm" placeholder='Your#Password123!'></PasswordInput>
                        {errors.password && (<Text c="red">{errors.password.message}</Text>)}
                    </Input.Wrapper>
                </div>

                {/* <Text size="sm" color="dimmed">
                    With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                    activities on and around the fjords of Norway
                </Text> */}
                <div className={classes.button_box}>
                    <Button type='submit' variant="light" style={{ background: "#B37FEB", color: 'white' }} fullWidth mt="md" radius="md">
                        Log In
                    </Button>
                </div>
                <div style={{ padding: '0 6%' }}>
                    <Divider my="xs" label="Or" labelPosition="center" />
                </div>
                <div className={classes.button_box}>
                    <Button variant="default" color='white' fullWidth mt="md" radius="md" 
                        leftIcon={
                                <FcGoogle/>
                        }
                    >
                        Continue with Google
                    </Button>
                    <Button variant="default" color='white' fullWidth mt="md" radius="md" 
                        leftIcon={
                                <BsApple/>
                        }
                    >
                        Continue with Apple
                    </Button>
                </div>
        </form>
    )
}

export default LoginBox;
