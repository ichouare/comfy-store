# Generated by Django 4.2.15 on 2024-08-31 12:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_remove_order_product_shop_id_order_product_shop_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product_shop',
            name='quantity',
            field=models.PositiveIntegerField(default='0'),
        ),
    ]
