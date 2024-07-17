import {
  NotifyPage,
  CheckboxWrapper,
  EmailContainer,
} from "./StylesPages/NotifyPage";

export function Notify() {
  return (
    <NotifyPage>
      <h1>Emergency Contacts</h1>
      <CheckboxWrapper>
        <label htmlFor="emergencyContact_1">Emergency Contact</label>
        <input
          type="checkbox"
          name="emergencyContact"
          id="emergencyContact_1"
        />
        <span>jonas.kindermann@gmail.com</span>
      </CheckboxWrapper>

      <CheckboxWrapper>
        <label htmlFor="emergencyContact_2">Emergency Contact</label>
        <input
          type="checkbox"
          name="emergencyContact"
          id="emergencyContact_2"
        />
        <span>clinton_mkd@gmail.com</span>
      </CheckboxWrapper>

      <CheckboxWrapper>
        <label htmlFor="emergencyContact_3">Emergency Contact</label>
        <input
          type="checkbox"
          name="emergencyContact"
          id="emergencyContact_3"
        />
        <span>joseph234@gmail.com</span>
      </CheckboxWrapper>

      <CheckboxWrapper>
        <label htmlFor="emergencyContact_4">Emergency Contact</label>
        <input
          type="checkbox"
          name="emergencyContact"
          id="emergencyContact_4"
        />
        <span>cris.slant@gmail.com</span>
      </CheckboxWrapper>

      <EmailContainer>
        <label htmlFor="email">Emergency Contact</label>
        <input type="email" name="email" placeholder="Add email" />
      </EmailContainer>
    </NotifyPage>
  );
}
