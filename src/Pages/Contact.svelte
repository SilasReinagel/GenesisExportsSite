<script>
  import TwoColumnLayout from '../Elements/TwoColumnLayout.svelte';
  import DividerWithText from '../Elements/DividerWithText.svelte';
  import Container from '../Elements/Container.svelte';

  import company from '../static-content';
</script>

<section class="contact center-vh py2">
  <Container>
    <div class="logo-box center mb1"><img src={company.logo} alt="{company.name} Logo" /></div>
    <DividerWithText text="Contact"/>
    <TwoColumnLayout>
      <form class="email-form" name="contact" form-name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" slot='second'>
        <hr/>
        <div hidden aria-hidden="true">
          <label>
            Don’t fill this out if you're human:
            <input name="bot-field" />
          </label>
        </div>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Your Name"/>
        <input type="email" name="email" placeholder="Your Email"/>
        <textarea name="message" placeholder="Your Message"/>
        <button type="submit">Send</button>
      </form>
      <div slot="first">
        <p>{@html company.contactPrompt}</p>
        <div class="row">
          {#if company.address}
          <div class="address">
            <hr/>
            <h3>Our Address</h3>
            <p>{company.address.line1}<br>{company.address.city}, {company.address.state}, {company.address.zip5}</p>
          </div>
          {/if}
          {#if company.phone}
          <div class="phone">
            <hr/>
            <h3>Our Phone</h3>
            <p>{company.phone}</p>
          </div>
          {/if}
        </div>

        {#if company.address && company.address.mapLink}
        <a href={company.address.mapLink}><img src="/images/map.jpg" alt="Map showing Gold Bar Espresso Location"/></a>
        {/if}
      </div>
    </TwoColumnLayout>
  </Container>
</section>

<style>
  section {
    min-height: 96vh;
  }

  .logo-box {
    width: 320px;
    min-height: 202px;
  }

  p {
    font-size: 1.1em;
    line-height: 1.6em;
  }

  .email-form {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .address {
    margin-right: 4em;
    margin-bottom: 2em;
  }

  hr {
    vertical-align: middle;
    margin: 0 0 1.5em 0;
    width: 120px;
    border-color: var(--input-border-color);
  }

  input {
    padding: 1em;
    margin: 1em 0;
    background-color: var(--input-background-color);
    border: 2px solid;
    border-color: var(--input-border-color);
    border-radius: 1em;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    transition: background-color 5000s ease-in-out 0s;
  }
  /*Change text in autofill textbox*/
  input:-webkit-autofill {
      -webkit-text-fill-color: var(--input-color) !important;
  }

  textarea {
    background-color: var(--input-background-color);
    border: 2px solid;
    border-color: var(--input-border-color);
    border-radius: 1em;
    color: var(--input-color);
  }

  ::placeholder {
    color: var(--input-color);
    opacity: 1;
  }

  button {
    padding: 1em;
    margin: 1em 25%;
    font-size: 1.2em;
    width: 50%;
  }

  textarea {
    padding: 1em;
    margin: 1em 0;
    min-height: 12em;
  }
</style>
