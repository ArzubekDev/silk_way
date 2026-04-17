import { Input, InputProps } from 'antd';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import style from './style.module.scss';

export interface InputControllerProps<T extends FieldValues> extends Omit<InputProps, 'name'> {
  id?: string;
  name: Path<T>;
  control: Control<T>;
  label?: string;
  text?: string;
  error?: string;
}

const TextAreaController = <T extends FieldValues>({
  id,
  name,
  label,
  control,
  placeholder,
  error,
  ...props
}: InputControllerProps<T>) => {
  <div className={style.form}>
    <div className={style.content}>
      <label className={style.contentName} htmlFor={id}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error: fieldError } }) => (
          <>
            <Input
              id={id}
              {...field}
              {...props}
              name={name as string}
              status={fieldError ? 'error' : props.status}
              placeholder={fieldError ? style.errorPlaceholder : ''}
            />
          </>
        )}
      />
    </div>
  </div>;
};

export default TextAreaController