import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

import img1 from '../../assets/injera-meals/img1.avif'
import img2 from '../../assets/injera-meals/img2.avif'
import img3 from '../../assets/injera-meals/img3.avif'
import img4 from '../../assets/injera-meals/img4.avif'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'אינגרה עם רוטב עדשים',
    description: 
    `אינג'רה עם עדשים היא מנה אתיופית טעימה המשלבת את המרקם החריף והספוג של 
    האינג'רה - לחם שטוח אתיופי מסורתי - עם עדשים מלאות טעם מבושלות בתבלינים ארומטיים.`,
    price: 22.99,
    image:img1
  },
  {
    id: 'm2',
    name: 'אינגרה עם רוטב עדשים',
    description: 
    `אינג'רה עם עדשים היא מנה אתיופית טעימה המשלבת את המרקם החריף והספוג של 
    האינג'רה - לחם שטוח אתיופי מסורתי - עם עדשים מלאות טעם מבושלות בתבלינים ארומטיים.`,
    price: 16.5,
    image:img2
  },
  {
    id: 'm3',
    name: 'אינגרה עם רוטב עדשים',
    description: 
    `אינג'רה עם עדשים היא מנה אתיופית טעימה המשלבת את המרקם החריף והספוג של 
    האינג'רה - לחם שטוח אתיופי מסורתי - עם עדשים מלאות טעם מבושלות בתבלינים ארומטיים.`,
    price: 12.99,
    image:img3
  },
  {
    id: 'm4',
    name: 'אינגרה עם רוטב עדשים',
    description: 
    `אינג'רה עם עדשים היא מנה אתיופית טעימה המשלבת את המרקם החריף והספוג של 
    האינג'רה - לחם שטוח אתיופי מסורתי - עם עדשים מלאות טעם מבושלות בתבלינים ארומטיים.`,
    price: 18.99,
    image:img4
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      image={meal.image}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section dir='rtl' className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
