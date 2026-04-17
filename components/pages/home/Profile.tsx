'use client'
import { useForm } from 'react-hook-form';
import { Button, Input, Form } from 'antd';
import style from './Profile.module.scss';

const { TextArea } = Input;

interface IProfileForm {
  name: string;
  surname: string;
  bio: string;
}

const ProfileForm = () => {
  const { register, handleSubmit, setValue, watch } = useForm<IProfileForm>({
    defaultValues: {
      name: "Асан",
      surname: "Усонов",
      bio: "Мен программистмин..."
    }
  });

  const onFinish = (data: IProfileForm) => {
    console.log("Жаңы маалыматтар:", data);
    // Бул жерде API'ге жиберебиз
  };

  return (
    <section className={style.profile}>
      <div className={style.card}>
        <h2 className={style.title}>Редактировать профиль</h2>
        
        <Form layout="vertical" onFinish={handleSubmit(onFinish)}>
          
          {/* Аты (Name) */}
          <Form.Item label="Имя" className={style.formItem}>
            <Input 
              placeholder="Введите имя" 
              {...register("name")} 
              onChange={(e) => setValue("name", e.target.value)}
            />
          </Form.Item>

          {/* Фамилиясы (Surname) */}
          <Form.Item label="Фамилия" className={style.formItem}>
            <Input 
              placeholder="Введите фамилию" 
              {...register("surname")}
              onChange={(e) => setValue("surname", e.target.value)}
            />
          </Form.Item>

          {/* Bio (О себе) */}
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