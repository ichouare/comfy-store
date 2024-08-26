# Generated by Django 4.2.15 on 2024-08-26 13:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='User_id',
            new_name='user',
        ),
        migrations.RemoveField(
            model_name='order',
            name='name',
        ),
        migrations.RemoveField(
            model_name='product',
            name='image',
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='products.category'),
        ),
        migrations.AlterField(
            model_name='product',
            name='free',
            field=models.BooleanField(default=False),
        ),
        migrations.CreateModel(
            name='ProductImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='product_images/')),
                ('alt_text', models.CharField(blank=True, max_length=255)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='products.product')),
            ],
        ),
        migrations.CreateModel(
            name='product_shop',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField()),
                ('Order_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order_id', to='products.order')),
                ('product_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='products.product')),
            ],
        ),
    ]
