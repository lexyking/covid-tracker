import React from 'react';
import Card from './../index';
import { render } from '@testing-library/react';

const lastupdate = '2020-04-17T03:38:35.000Z';
const data = { value: 902020 };
const cardTitle = 'Confirmed';
const title = `${cardTitle} cases of covid-19`;

const renderCard = () => {
  return render(
    <Card
      data={data}
      lastUpdate={new Date(lastupdate).toDateString()}
      title={title}
    />
  );
};

describe('Testing that the Card is being rendered', () => {
  const { container } = renderCard();
  const cardElement = container.querySelector('[data-testId="card"]');

  it('Should render a card component', () => {
    expect(cardElement.tagName).toBe('SECTION');
  });

  it('Should render the title', () => {
    const cardSectionTitle = cardElement.querySelector('[data-testId="title"]')
      .textContent;

    expect(cardSectionTitle).toEqual(title);
  });

  it('Should render the date of the last update', () => {
    const cardLastUpdate = cardElement.querySelector(
      '[data-testId="lastUpdate"]'
    ).textContent;
    expect(cardLastUpdate).toEqual(new Date(lastupdate).toDateString());
  });

  it('Should display the number of cases on the slider ', () => {
    const NumberOfCasesOnTheSlider = cardElement.querySelector(
      '[data-testId="containerSlider"]'
    ).firstChild.textContent;
    expect(Number(NumberOfCasesOnTheSlider)).toEqual(data.value);
  });
});
