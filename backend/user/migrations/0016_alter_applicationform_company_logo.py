# Generated by Django 4.0.3 on 2022-04-05 04:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0015_secondaryslotbooking'),
    ]

    operations = [
        migrations.AlterField(
            model_name='applicationform',
            name='company_logo',
            field=models.ImageField(blank=True, max_length=1000, null=True, upload_to=''),
        ),
    ]
