import {
  SimpleForm,
  Create,
  TextInput,
  required,
  ReferenceInput,
  NumberInput,
} from "react-admin";

export const UnitEdit = () => {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" validate={[required()]} label="Id" />
        <TextInput
          source="description"
          validate={[required()]}
          label="Description"
        />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="order" validate={[required()]} label="Order" />
      </SimpleForm>
    </Create>
  );
};
