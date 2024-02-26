import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'סושי',
    description: 'דגים וירקות משובחים',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'שניצל',
    description: 'התמחות ישראלית!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'ברביקיו בורגר',
    description: 'ישראלי, נא, בשרני',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'קערה ירוקה',
    description: 'בריא... וירוק...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
