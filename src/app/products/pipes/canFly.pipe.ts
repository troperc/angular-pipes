import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
    transform(value: boolean, canFlyValue: boolean=false): string {
        return canFlyValue ? 'Vuela' : 'No vuela'
    }
}