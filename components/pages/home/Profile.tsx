'use client'
import { useForm } from 'react-hook-form';
import { Button, Input, Form } from 'antd';
import style from './Profile.module.scss';
import InputController from '../InputController';

const { TextArea } = Input;

interface IProfileForm {
  name: string;
  surname: string;
  bio: string;
}

const ProfileForm = () => {
  const { register, handleSubmit, setValue, watch, control } = useForm<IProfileForm>({
    defaultValues: {
      name: "",
      surname: "",
      bio: ""
    }
  });

  const onFinish = (data: IProfileForm) => {
    console.log("Жаңы маалыматтар:", data);
  };

  return (
    <section className={style.profile}>
      <div className={style.card}>
        <h2 className={style.title}>Редактировать профиль</h2>
        <Form layout="vertical" onFinish={handleSubmit(onFinish)}>
         <InputController
         id='name'
         name='name'
         label='Имя'
         control={control}
         placeholder='Имя...'
         />

         <InputController
         id='surname'
         name='surname'
         label='Фамилия'
         control={control}
         placeholder='Фамилия...'
         />

          <Form.Item label="О себе (Bio)" className={style.formItem}>
            <TextArea 
              rows={4} 
              placeholder="Расскажите о себе" 
              maxLength={200}
              {...register("bio")}
              onChange={(e) => setValue("bio", e.target.value)}
              showCount
            />
          </Form.Item>

          <div className={style.actions}>
            <Button type="primary" htmlType="submit" block size="large">
              Сохранить изменения
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default ProfileForm;