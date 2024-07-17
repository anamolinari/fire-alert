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
        <label htmlFor="emergencyContact">Emergency Contact</label>
        <input type="checkbox" name="emergencyContact" id="emergencyContact" />
        <span>jonas.kindermann@gmail.com</span>
      </CheckboxWrapper>

      <CheckboxWrapper>
        <label htmlFor="emergencyContact">Emergency Contact</label>
        <input type="checkbox" name="emergencyContact" id="emergencyContact" />
        <span>clinton_mkd@gmail.com</span>
      </CheckboxWrapper>

      <CheckboxWrapper>
        <label htmlFor="emergencyContact">Emergency Contact</label>
        <input type="checkbox" name="emergencyContact" id="emergencyContact" />
        <span>joseph234@gmail.com</span>
      </CheckboxWrapper>

      <CheckboxWrapper>
        <label htmlFor="emergencyContact">Emergency Contact</label>
        <input type="checkbox" name="emergencyContact" id="emergencyContact" />
        <span>cris.slant@gmail.com</span>
      </CheckboxWrapper>

      <EmailContainer>
        <label htmlFor="email">Emergency Contact</label>
        <input type="email" name="email" placeholder="Add email" />
      </EmailContainer>
    </NotifyPage>
  );
}
