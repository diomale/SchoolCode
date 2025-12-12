class SuperHero:
    def __init__(self, name, power, alias):
        self.name = name
        self.power = power
        self.alias = alias

    def display_info(self):
        return f"Hero Name: {self.name}, Power: {self.power}, Alias: {self.alias}"