class Person {
  constructor(name) {
    if (!name) {
      throw new Error(
        'name is not defined, you need have a name to create a new person'
      );
    }

    this.name = name;
  }

  imprimirNombre() {
    console.log(`${this.name} ha sido impreso! :D`);
  }
}

const jose = new Person('Jose');
const carlos = new Person('Carlos');
// const personaSinNombre = new Person();

jose.imprimirNombre();
carlos.imprimirNombre();
// personaSinNombre.imprimirNombre();
