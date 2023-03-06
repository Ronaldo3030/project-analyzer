import styled from "styled-components";

const ContainerBadge = styled.span`
--bs-badge-padding-x: 0.65em;
--bs-badge-padding-y: 0.35em;
--bs-badge-font-size: 0.75em;
--bs-badge-font-weight: 700;
--bs-badge-color: #fff;
--bs-badge-border-radius: 0.375rem;
display: inline-block;
padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
font-size: var(--bs-badge-font-size);
font-weight: var(--bs-badge-font-weight);
line-height: 1;
color: var(--bs-badge-color);
text-align: center;
white-space: nowrap;
vertical-align: baseline;
border-radius: var(--bs-badge-border-radius);
color: #fff!important;
margin: 0 15px;
`

const Badge = (props) => {
  let text = '';
  let color = '';
  switch (props.text) {
    case 'to-do':
      text = "A fazer"
      color = '#c70909'
      break;
    case 'doing':
      text = "Fazendo"
      color = '#6532f2'
      break;
    case 'done':
      text = "Feito"
      color = '#289b54'
      break;

    default:
      break;
  }
  return (
    <ContainerBadge style={{ background: color }} >
      {text}
    </ContainerBadge >
  )
}

export default Badge;